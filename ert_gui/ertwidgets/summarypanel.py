from qtpy.QtCore import Qt
from qtpy.QtWidgets import (
    QFrame,
    QLabel,
    QVBoxLayout,
    QHBoxLayout,
    QScrollArea,
    QWidget,
    QGridLayout,
)

from ert_gui.ertwidgets.models.ertsummary import ErtSummary
from res.enkf import EnKFMain


class SummaryTemplate:
    def __init__(self, title):
        super().__init__()

        self.text = ""
        self.__finished = False
        self.startGroup(title)

    def startGroup(self, title):
        if not self.__finished:
            style = (
                "display: inline-block; width: 150px; vertical-align: top; float: left"
            )
            self.text += f'<div style="{style}">\n'
            self.addTitle(title)

    def addTitle(self, title):
        if not self.__finished:
            style = "font-size: 16px; font-weight: bold;"
            self.text += f'<div style="{style}">{title}</div>'

    def addRow(self, value):
        if not self.__finished:
            style = "text-indent: 5px;"
            self.text += f'<div style="{style}">{value}</div>'

    def endGroup(self):
        if not self.__finished:
            self.text += "</div></br>\n"

    def getText(self):
        if not self.__finished:
            self.__finished = True
            self.endGroup()
        return f"<html>{self.text}</html>"


class SummaryPanel(QFrame):
    def __init__(self, ert: EnKFMain):
        self.ert = ert
        QFrame.__init__(self)

        self.setMinimumWidth(250)
        self.setMinimumHeight(150)

        widget = QWidget()
        self.layout = QHBoxLayout()
        widget.setLayout(self.layout)

        scroll = QScrollArea()
        scroll.setWidgetResizable(True)
        scroll.setWidget(widget)

        layout = QGridLayout()
        layout.addWidget(scroll)

        self.setLayout(layout)
        self.updateSummary()

    def updateSummary(self):
        summary = ErtSummary(self.ert)

        text = SummaryTemplate("Forward models")

        for job in summary.getForwardModels():
            text.addRow(job)

        self.addColumn(text.getText())

        text = SummaryTemplate("Parameters")
        for parameters in summary.getParameters():
            text.addRow(parameters)

        self.addColumn(text.getText())

        text = SummaryTemplate("Observations")
        for observations in summary.getObservations():
            text.addRow(observations)

        self.addColumn(text.getText())

    def addColumn(self, text):
        layout = QVBoxLayout()
        text_widget = QLabel(text)
        text_widget.setWordWrap(True)
        text_widget.setTextFormat(Qt.RichText)
        layout.addWidget(text_widget)
        layout.addStretch(1)

        self.layout.addLayout(layout)
