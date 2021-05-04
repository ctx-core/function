export function _stacktrace() {
    const err = new Error
    return err.stack!.split('\n')
}
export function _stacktrace_filename() {
    const stacktrace_filename_line = _stacktrace_filename_line()
    return stacktrace_filename_line.slice(0 + 1, stacktrace_filename_line.indexOf(':'))
}
export function _stacktrace_line() {
    const stacktrace_filename_line = _stacktrace_filename_line()
    return parseInt(stacktrace_filename_line.slice(stacktrace_filename_line.indexOf(':') + 1, stacktrace_filename_line.lastIndexOf(':')))
}
export function _stacktrace_line_pos() {
    const stacktrace_filename_line = _stacktrace_filename_line()
    return stacktrace_filename_line.slice(stacktrace_filename_line.lastIndexOf(':') + 1)
}
export function _stacktrace_filename_line(stack_line = _stacktrace()[3]) {
    return (
        stack_line.slice(stack_line.lastIndexOf('/'), stack_line.lastIndexOf(')'))
        || stack_line.slice(stack_line.lastIndexOf('('), stack_line.lastIndexOf(')'))
    )
}
