import moment from 'moment';

export function formatDate(date: Date, format?: string) {
    let dateFormat = "DD-MM-YYYY"
    if (format) {
        dateFormat = format
    }
    return moment(date).format(dateFormat);
}

export function convertDateToTZFormat(date) {
    return moment.utc(date).format();
}


export function getYear(date: string) {
    return +(moment(date).format('YYYY'));
}

export function getMonth(date: string) {
    return +(moment(date).format('MM'));
}
export function getDay(date: string) {
    return +(moment(date).format('DD'));
}