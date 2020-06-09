export default (statusCode, statusResponse, statusMessage, result = []) => ({
  status: {
    code: statusCode,
    response: statusResponse,
    message: statusMessage
  },
  data: result
})
