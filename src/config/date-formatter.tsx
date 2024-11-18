import moment from 'moment';

// function moment(inp?: moment.MomentInput, format?: moment.MomentFormatSpecification, strict?: boolean) {
//     return moment(inp, format, strict).tz('Asia/Kolkata')
// }

export function getPresentDate() {
    return moment();
}

export function calculateToPresentDate(date: Date) {
    return moment(date).diff(moment(), 'days');
}

export function calculateDate(date: Date, days) {
    return moment(date).add(days, 'days').format('DD/MM/YYYY');
}
export function calculateDateWithoutFormat(date: Date, days) {
    return moment(date).add(days, 'days');
}

export function calculateDateAndFormatIso(date: Date, days) {
    return moment(date, 'DD/MM/YYYY').add(days, 'days').format('YYYY-MM-DD');
}

export function calculateDateAndFormatIsoBySubtractingDays(date: Date, days) {
    return moment(date, 'DD/MM/YYYY').subtract(days, 'days').format('YYYY-MM-DD');
}

export function formatDate(date: Date, format?: string) {
    let dateFormat = "DD-MM-YYYY"
    if (format) {
        dateFormat = format
    }
    return moment(date).format(dateFormat);
}

export function formatDisplayDate(date: Date) {
    return moment(date).format('Do MMMM YYYY');
}

export function formatDateTime(date: Date) {
    return moment(date).format('DD-MM-YYYY hh:mm');
}
export function customFormat(date: Date, format) {
    return moment(date).format(format)
}

export function calculateDays(date1: Date, date2: Date) {
    return moment(date1).diff(moment(date2), 'days');
}

export function convertToDate(date: Date) {
    return moment(date).format('DD/MM/YYYY');
}

export function convertToTime(date: Date) {
    return moment(date).format('hh:mmA');
}

export function convertToDateWithFormat(date: Date, format: string) {
    return moment(date).format(format);
}


export function convertLocalDateToTZFormat(date: Date) {
    return moment(date).format('YYYY-MM-DDTHH:mm:ss') + 'Z';
}

export function convertStringToDate(date: string) {
    return new Date(moment(date, 'DD/MM/YYYY').toString());
}

export function convertStringToISODateFormat(date: string, format: string) {
    const momentDate = moment(date, format);
    const dateInISOFormat = moment(momentDate).format('YYYY-MM-DD');
    return dateInISOFormat;
}

export function convertStringToISODateTimeFormat(date: string, time: string, dateFormat: string) {
    const dateTimeInISOFormat = moment(date + ' ' + time, dateFormat).format('YYYY-MM-DD HH:mm:ss');
    return dateTimeInISOFormat;
}

export function convertToDateTimeFormat(date) {
    const dateInISOFormat = moment(date).format('DD-MM-YY');
    const timeInISOFormat = moment(date).format('HH:mm:ss');
    return dateInISOFormat + '\n' + timeInISOFormat;
}

export function convertDateToTZFormat(date) {
    return moment.utc(date).format();
}

export function convertDateToStartOfDayWithTZFormat(date) {
    return moment.utc(date).startOf('day').format();
}

export function convertDateToEndOfDayWithTZFormat(date) {
    return moment.utc(date).endOf('day').format();
}

export function convertStringToDateWithFormat(date: string, format: string) {
    return new Date(moment(date, format).toString());
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

export function convertToLLLLFormat(date: Date) {
    return moment(date).format('LLLL');
}

export function convertSecondsToDays(seconds: any) {
    if (seconds && seconds >= 0) {
        seconds = Number(seconds);
        var d = Math.floor(seconds / (3600 * 24));
        var h = Math.floor(seconds % (3600 * 24) / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        var s = Math.floor(seconds % 60);
        if (d <= 0) {
            return "0 days"
        }
        else {
            if (h > 12) {
                return d + 1 + "days"
            }
            else {
                return d + "days"
            }
        }
    }
    else {
        return "0 days"
    }
}

const LOCAL_DATE_FORMATS = {
    parse: {
        dateInput: 'MM-DD-YYYY',
    },
    display: {
        dateDisplay: "Do MMMM YYYY",
        timeDisplay: 'h:mm A',
        dateInput: 'MM-DD-YYYY', // 'MMM DD, YYYY'
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

const COUNTRY_CODE_LOCAL_DATE_FORMATS: { [key: string]: { logFormat: string, fieldFormat: string } } = {
    INDIA: { logFormat: "Do MMMM YYYY", fieldFormat: "MM-DD-YYYY" },
    USA: { logFormat: "Do MMMM YYYY", fieldFormat: "MM-DD-YYYY" }
}

export function updateLocalDateFormate(countryCode: string) {
    LOCAL_DATE_FORMATS.display.dateDisplay = COUNTRY_CODE_LOCAL_DATE_FORMATS[countryCode].logFormat
    LOCAL_DATE_FORMATS.parse.dateInput = COUNTRY_CODE_LOCAL_DATE_FORMATS[countryCode].logFormat
    LOCAL_DATE_FORMATS.display.dateInput = COUNTRY_CODE_LOCAL_DATE_FORMATS[countryCode].fieldFormat
}
export default LOCAL_DATE_FORMATS