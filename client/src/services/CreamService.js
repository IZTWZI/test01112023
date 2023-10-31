import Api from '@/services/Api'

export default {
    index (search) {
        return Api().get('creams')
    },
    show (creamId) {
        return Api().get('cream/'+creamId)
    },
    post (cream) {
        return Api().post('cream/',cream)
    },
    put (cream) {
        return Api().put('cream/'+cream.id, cream)
    },
    delete (cream) {
        return Api().delete('cream/'+cream.id, cream)
    },
}