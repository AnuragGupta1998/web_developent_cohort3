class ApiResponse {
    constructor(statusCode,data,message ="success"){
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400 // if status code is in the range of 200-299 then success is true otherwise false
    }
}

export {ApiResponse};