import "./../../scss/KienThucContent.scss";
export const Content = ({ data }) => {
  switch (data?.type) {
    case "CONTENT": {
      return (
        <div
          dangerouslySetInnerHTML={{ __html: data?.content }}
          className={`content ${data?.specialType} ${data?.level}`}
          id={data?.id}
        ></div>
      );
    }

    case "LIST_CONTENT": {
      return (
        <ul>
          {data?.list_contents?.map((item) => {
            return (
              <li
                className={`content ${data?.level} ${data?.specialType}`}
                id={data?.id}
                dangerouslySetInnerHTML={{ __html: item }}
              ></li>
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
