from ert_shared.status.entity.state import REAL_STATE_TO_COLOR
from ert_gui.simulation.palette import TOTAL_PROGRESS_COLOR
from math import floor

from qtpy.QtCore import QTimer
from qtpy.QtWidgets import QWidget, QFrame
from qtpy.QtGui import QPainter, QColor, QLinearGradient


class StateTracker(object):
    def __init__(self, state_reference, color, progress=0.0):
        super(StateTracker, self).__init__()
        self.name = state_reference
        self.color = color
        self.progress = progress

    def setProgress(self, progress):
        self.progress = progress


class Progress(QFrame):
    def __init__(self):
        QFrame.__init__(self)
        self.setLineWidth(1)
        self.setFrameStyle(QFrame.Panel | QFrame.Plain)

        self.__color = QColor(255, 255, 255)

        self.setMinimumHeight(30)
        self.__state_order = []
        """@type: list of State"""

        self.__states = {}
        """@type: dict of (object, State)"""

        self.__count = 0

        self.__indeterminate = False
        self.__indeterminate_color = TOTAL_PROGRESS_COLOR
        self.__indeterminate_state = 0.5
        self.__indeterminate_step_size = 0.05
        self.__timer = QTimer(self)
        self.__timer.setInterval(100)
        self.__timer.timeout.connect(self.update)

        for state, color in REAL_STATE_TO_COLOR.items():
            self._addState(state, QColor(*color))

    def _addState(self, state, state_color, progress=0.0):
        state_tracker = StateTracker(state, state_color, progress)
        self.__state_order.append(state_tracker)
        self.__states[state] = state_tracker


    # def updateState(self, state, progress):
    #     self.__count += 1
    #     self.__states[state].setProgress(progress)
    #     self.update()


    def setIndeterminate(self, indeterminate):
        self.__indeterminate = indeterminate
        if indeterminate:
            self.__timer.start()
        else:
            self.__timer.stop()

    def get_indeterminate(self):
        return self.__indeterminate

    # def setIndeterminateColor(self, color):
    #     self.__indeterminate_color = color

    def paintEvent(self, paint_event):
        QFrame.paintEvent(self, paint_event)
        painter = QPainter(self)
        painter.setRenderHint(QPainter.Antialiasing, True)
        painter.setRenderHint(QPainter.SmoothPixmapTransform, True)

        rect = self.contentsRect()
        """@type: QRect"""

        painter.fillRect(rect, self.__color)

        x = rect.x()
        y = rect.y()
        width = rect.width()
        height = rect.height()

        if not self.__indeterminate:
            count = len(self.__state_order)
            for index in range(count):
                state = self.__state_order[index]
                state_width = floor(width * (state.progress / 100.0))

                if index == count - 1:
                    state_width = width - x + 1

                painter.fillRect(x, y, state_width, height, state.color)

                x += state_width
        else:
            painter.fillRect(rect, self.__indeterminate_color)

            p = self.__indeterminate_state
            s = self.__indeterminate_step_size

            gradient = QLinearGradient(0, rect.height() / 2, rect.width(), rect.height() / 2)
            gradient.setColorAt(p - s, QColor(255, 255, 255, 0))
            gradient.setColorAt(p, QColor(255, 255, 255, 200))
            gradient.setColorAt(p + s, QColor(255, 255, 255, 0))
            painter.fillRect(rect, gradient)

            self.__indeterminate_state += s

            if self.__indeterminate_state + s >= 1.0 or self.__indeterminate_state + s <= 0.0:
                self.__indeterminate_step_size *= -1
                self.__indeterminate_state = round(self.__indeterminate_state) + self.__indeterminate_step_size

    def handle(self, event):
        self.setIndeterminate(event.indeterminate)
        if event.indeterminate:
            return

        if event.snapshot is None:
            return

        for iens, real in event.snapshot.reals.items():
            print(iens, real)
