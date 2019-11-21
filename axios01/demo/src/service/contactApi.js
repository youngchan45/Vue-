const CONTACT_API = {
    //獲取聯繫人列表
    getContactList: {
        method: 'get',
        url: '/contactList'
    },
    //新建聯繫人JSON
    addConatctJSON: {
        method: 'post',
        url: '/contact/new/json'
    },
    //新建聯繫人FORM
    addConatctFORM: {
        method: 'post',
        url: '/contact/new/form'
    },
    //編輯聯繫人
    editContact: {
        method: 'put',
        url: '/contact/edit'
    },
    //刪除聯繫人
    delContact: {
        method: 'delete',
        url: '/contact'
    },
}
export default CONTACT_API
