import React from "react";

// Can also be provided dynamic data from gatsb-config using queries
export default function LargeTextPanel() {
  return (
    <div className="largeTextPanel">
      <h2 className="largeTextPanel__heading heading heading--lg">
        Successfull Course Completion
      </h2>
      <p className="largeTextPanel__text text">
        Participation in all modules and all practice quizzes through the
        content (40%)
      </p>
      <p className="largeTextPanel__text text">Final quiz (60%)</p>
      <p className="largeTextPanel__text text">
        To pass the quizzes and the final quiz, you will need to be engaged in
        the course and complete all modules
      </p>
      <p className="largeTextPanel__text text">
        There is only one way to be unsuccessful in this course - stop
        participating
      </p>
      <p className="largeTextPanel__text text">
        All quizzes are created to support your learning and will give you the
        opportunity to get to the "right" answer eventually. This course is more
        about the investmnent of your growth rather than giving grades
      </p>
    </div>
  );
}
