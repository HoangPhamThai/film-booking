import moment from "moment"

export const formatDateTime = (input) => {
    if (input){
        return moment(input).format("DD/mm/yyyy hh:mm")
    }
    return ''
}