let empPayrollList ;
window.addEventListener("DOMContentLoaded", (event) => {
    empPayrollList = getEmployeePayrollDataFromLocalStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromLocalStorage = () => {
    return localStorage.getItem("EmployeePayrollList") ?
        JSON.parse(localStorage.getItem("EmployeePayrollList")) : [];
};

const createInnerHtml = () => {
    const headerHtml =
        "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
        if(empPayrollList.length == 0) return;
        let innerHtml = `${headerHtml}`;
        for(const empPayrollData of empPayrollList){
             innerHtml = `${innerHtml}
             <tr>
                     <td><img class="profile" alt="" src="${empPayrollData.profilePic}" ></td>
                     <td>${empPayrollData.name}</td>
                     <td>${empPayrollData.gender}</td>
                     <td>${getDeptHtml(empPayrollData.department)}</td>
                     <td>${empPayrollData.salary}</td>
                     <td>${stringifyDate(empPayrollData.startDate)}</td>
                     <td>
                         <img id="${empPayrollData.id}" onclick="remove(this)"  src="../assets/delete-black-18dp.svg" alt="delete">
                         <img id="${empPayrollData.id}" onclick="update(this)"  src="../assets/create-black-18dp.svg" alt="edit">
                     </td>
                 </tr>
             `;
        }
        document.querySelector("#table-display").innerHTML = innerHtml;
     }

     const getDeptHtml = (deptList) => {
        let deptHtml = '';
        for(const dept of deptList){
            deptHtml = `${deptHtml}<div class="dept-label">${dept}</div>`
        }
        return deptHtml;
    }

    const remove = (node) => {
        let empPayrollData = empPayrollList.find(empData => empData._id == node._id)
        if(!empPayrollData) return;
        const index = empPayrollList.map(empData => empData.id)
                                     .indexOf(empPayrollData.id);
         empPayrollList.splice(index,1);
         localStorage.setItem("EmployeePayrollList",JSON.stringify(empPayrollList));
         document.querySelector(".emp-count").textContent = empPayrollList.length;
         createInnerHtml();
   }