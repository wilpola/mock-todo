// @author: wilpola
// @desc: This component will only display completed items

// Imports

// imported styles

// Completed component
const CompletedPage = (params) => {

  // All rendered content
  return (
    <div className="completed-container">
      {/* {params.data.filter((item, key) => {
        if (item.status === "completed") {
          return (
            <div className="todoItem" key={key}>
              <p>{item.title}</p>
            </div>
          );
        }
        return "";
      })} */}
      {params.data
        .filter((status) => status.status === "completed")
        .map((item, key) => (
          <div key={key} className="todoItem">{item.title}</div>
        ))}
    </div>
  );
};

//export page
export default CompletedPage;
