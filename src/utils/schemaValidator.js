// export const validateSocialMediaURL = {
//     validator: function (value) {
//         return /^https?:\/\/(www\.)?(twitter|linkedin|facebook|instagram)\.com\/[a-zA-Z0-9_.-]+$/.test(value);
//     },
//     message: (props) => `${props.value} is not a valid social media URL`,
// };

// export const isValidDate = (dateString) => {
//     // Validate the date format
//     if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) return false;

//     // Validate the year range
//     const year = parseInt(dateString.substr(0, 4));
//     if (year < 1900 || year > new Date().getFullYear() + 1) return false;

//     // Validate the month range
//     const month = parseInt(dateString.substr(5, 2));
//     if (month < 1 || month > 12) return false;

//     // Validate the day range
//     const day = parseInt(dateString.substr(8, 2));
//     if (day < 1 || day > 31) return false;

//     // Validate the date using the Date object
//     const date = new Date(dateString);
//     if (isNaN(date.getTime())) return false;

//     // Return true if all validations pass
//     return true;
// };

// export const validateURL = (url) => {
//     const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
//     return regex.test(url);
// };

// export const validateImage = (value) => {
//     const supportedFormats = ['jpg', 'jpeg', 'png', 'webp'];
//     const extension = value.split('.').pop().toLowerCase();
//     return supportedFormats.includes(extension);
// };
