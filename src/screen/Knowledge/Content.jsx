import "./../../scss/KienThucContent.scss";
export const Content = ({ data }) => {
  switch (data?.type) {
    case "CONTENT": {
      return (
        <div className={`content ${data?.specialType} ${data?.level}`}>
          {data?.content}
        </div>
      );
    }

    case "LIST_CONTENT": {
      console.log("data: ", data?.list_content);
      return (
        <ul>
          {data?.list_content?.map((item) => {
            return (
              <li className={`content ${data?.level} ${data?.specialType}`}>
                {item}
              </li>
            );
          })}
        </ul>
      );
    }

    case "IMAGE": {
      return (
        <div className="image">
          <img src={data?.img} alt="img" />
        </div>
      );
    }

    default: {
      return <></>;
    }
  }
};
