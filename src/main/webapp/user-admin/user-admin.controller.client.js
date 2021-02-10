let $usernameFld;
let $passwordFld;
let $firstNameFld;
let $lastNameFld;
let $roleFld;
let $createBtn;
let $tableRows;
let $updateBtn

let userService = new AdminUserServiceClient();

let users = []

function createUser() {
    const newUser = {
        userName: $usernameFld.val(),
        password: $passwordFld.val(),
        firstName: $firstNameFld.val(),
        lastName: $lastNameFld.val(),
        role: $roleFld.val(),
    };

    userService.createUser(newUser)
        .then(function (actualUser) {
            users.push(actualUser)
            renderUsers(users)
        })
    $usernameFld.val("");
    $passwordFld.val("");
    $firstNameFld.val("");
    $lastNameFld.val("");
    $roleFld.val("");
}

function deleteUser(event) {
    let button = $(event.target)
    let index = button.attr("id")
    let id = users[index]._id
    userService.deleteUser(id)
        .then(function (status) {
            users.splice(index, 1)
            renderUsers(users)
        })
}

function renderUsers(users) {
    $tableRows.empty()
    for (let i = 0; i < users.length; i++) {
        let user = users[i]
        $tableRows
            .append(`
      <tr>
          <td> <div class="wbdv-input-box"> ${user.userName} </div></td>
          <td></td>
          <td> <div class="wbdv-input-box"> ${user.firstName} </div></td>
          <td> <div class="wbdv-input-box"> ${user.lastName} </div></td>
          <td> <div class="wbdv-input-box"> ${user.role} </div></td>
          <td></td>
          <td>
          <div class="wbdv-input-box">
          <h4>
          <i id="${i}" class="fas fa-times wbdv-delete-btn"></i>
          &nbsp; &nbsp; 
          <i id="${user._id}" class="fas fa-edit wbdv-select-btn"></i>
          </h4>
          </div>
          </td>
      </tr>
      `)
    }
    $(".wbdv-delete-btn").click(deleteUser)
    $(".wbdv-select-btn").click(selectUser)
}

let selectedUser = null;

function selectUser(event) {
    const id = $(event.target).attr("id");
    selectedUser = users.find(user => user._id === id)
    $usernameFld.val(selectedUser.userName)
    $passwordFld.val(selectedUser.password)
    $firstNameFld.val(selectedUser.firstName)
    $lastNameFld.val(selectedUser.lastName)
    $roleFld.val(selectedUser.role)
}

function updateUser() {
    selectedUser.userName = $usernameFld.val()
    selectedUser.password = $passwordFld.val()
    selectedUser.firstName = $firstNameFld.val()
    selectedUser.lastName = $lastNameFld.val()
    selectedUser.role = $roleFld.val()

    userService.updateUser(selectedUser._id, selectedUser)
        .then(() => {
            const index = users.findIndex(user => user._id === selectedUser._id);
            users[index] = selectedUser
            renderUsers(users)
        })

    $usernameFld.val("");
    $passwordFld.val("");
    $firstNameFld.val("");
    $lastNameFld.val("");
    $roleFld.val("");
}

function findUserById(userId) {
    userService.findUserById(userId).then(response => response.json());
}

function main() {
    $usernameFld = jQuery("#usernameFld")
    $passwordFld = jQuery("#passwordFld")
    $firstNameFld = jQuery("#firstNameFld")
    $lastNameFld = jQuery("#lastNameFld")
    $roleFld = jQuery("#roleFld")
    $tableRows = jQuery("#table-rows")
    $createBtn = jQuery(".wbdv-createBtn")
    $updateBtn = jQuery(".wbdv-updateBtn")

    $updateBtn.click(updateUser)
    $createBtn.click(createUser)

    userService.findAllUsers().then(function (actualUsers) {
        users = actualUsers
        renderUsers(users)
    })

}

$(main)