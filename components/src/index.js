import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import Comment from "./Comment";
import ApprovalCard from "./ApprovalCard";

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <Comment
          author="Sam"
          timeAgo="Today at 4:45PM"
          avatar={faker.image.avatar()}
          message={faker.lorem.sentence(5, 10)}
        />
      </ApprovalCard>

      <ApprovalCard>
        <Comment
          author="Alex"
          timeAgo="Yesterday at 10:30AM"
          avatar={faker.image.avatar()}
          message={faker.lorem.sentence(5, 10)}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author="John"
          timeAgo="Today at 1:25PM"
          avatar={faker.image.avatar()}
          message={faker.lorem.sentence(5, 10)}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
