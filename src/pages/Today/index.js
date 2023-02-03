// @author: wilpola
// @desc: This is file contains the Today Page

// imports

// Import styles

// TodayPage component
const TodayPage = (params) => {


    // all Rendered content
    return (
        <div className='today-container'>
            {params.data.map((item, key) => {
                if (item.dueDate === new Date().toLocaleDateString('us-en')) {
                    return (
                        <div className="todoItem">
                            <p>{item.title}</p>
                        </div>
                    )
                }
            })}
        </div>
    )
}

// Export page
export default TodayPage;
