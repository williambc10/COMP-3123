const errorHandlerMiddleware = (err, req, res, next) => { //
    console.error(err.stack);
    const errorObject = {
        status: 500,
        message: "Something broke!",
        err: err.message
    }
    res.status(500).send(errorObject);
}

module.exports = errorHandlerMiddleware; //exporting the function