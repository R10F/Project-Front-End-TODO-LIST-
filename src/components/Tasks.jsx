import React from "react";
import AddTask from "./AddTask";
import ListItem from "./ListItem";

class Tasks extends React.Component {
    handleFilter = (item) => {
        const filterValue = this.props.filter;
        if (filterValue === "All") return true;
        else if (filterValue === "Completed") return item[2];
        else if (filterValue === "InProgress") return !item[2];
    }

    render() {
        let allItem = this.props.taskList.filter(this.handleFilter).map((item, index) => {
            return <ListItem id={index} taskDetails={item} editTask={this.props.editTask} deleteTask={this.props.deleteTask} markAsDone={this.props.markAsDone} />
        });

        return (
            <div className="w-100 content">
                <AddTask addTask={this.props.addTask} />
                <div className="card m-5 p-2">
                    <ul className="list-group list-group-flush">
                        {allItem}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Tasks;
