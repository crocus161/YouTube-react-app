const calcSpentDate = date => {

    const formatDate = new Date(Date.parse(date));
    const diff = Math.floor(new Date().getTime() - formatDate.getTime());

    let seconds = Math.floor(diff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let months = Math.floor(days / 31);
    let years = Math.floor(months / 12);

    if(years) return `${years} year${years>1 ? 's' : ''} ago`
    else if(months) return `${months} month${months>1 ? 's' : ''} ago`
    else if(days) return `${days} day${days>1 ? 's' : ''} ago`
    else if(hours) return `${hours} hour${hours>1 ? 's' : ''} ago`
    else if(minutes) return `${minutes} minute${minutes>1 ? 's' : ''} ago`
    else if(seconds) return `${seconds} second${seconds>1 ? 's' : ''} ago`
}

export default calcSpentDate;