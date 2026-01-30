const ErrorHandler = (err, req, res, next) =>{
    // Use res.statusCode (set by route or res.status()) or default to 500
    const statusCode = res.statusCode ? res.statusCode : 500;

    res.status(statusCode);
    res.json({
        message: err.message,
        stack: err.stack
    })
}

module.exports = {ErrorHandler}