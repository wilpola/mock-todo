// @author: wilpola
// @desc: This is file contains the Today Page

// imports

// Import styles

// TodayPage component
const TodayPage = (params) => {
  // all Rendered content

  return (
    <div className="today-container">
      {params.data
        .filter(
          (data) => data.dueDate === new Date().toLocaleDateString("us-en")
        )
        .map((item, key) => (
          <div key={key} className="todoItem">
            {item.title}
          </div>
        ))}
    </div>
  );
};

// Export page
export default TodayPage;
