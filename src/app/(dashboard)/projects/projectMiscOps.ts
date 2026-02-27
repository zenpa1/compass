//Converts dates into date strings for the <Input> components in the project card
export default function toISODate(date: Date)  {
    if (!(date instanceof Date) || date == null) return "";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};