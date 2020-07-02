function createMultiDayEvent( calendar, title, startDate, endDate ) {
 var timeZone = calendar.getTimeZone();
 var description = Utilities.formatString( '%s from %s to %s', title, dateString_( startDate, timeZone ), dateString_( endDate, timeZone ));
 return calendar.createEventFromDescription(description);
}

function dateString_( date, timeZone ) {
 // format like 21 Jun 2020
 var format = ' dd MMM yyyy';
 var str = Utilities.formatDate(date, timeZone, format);
 return str;
}
