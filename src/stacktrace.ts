export function stacktrace_():string[] {
	const err = new Error
	return err.stack!.split('\n')
}
export function stacktrace_filename_():string {
	const stacktrace_filename_line = stacktrace_filename_line_()
	return stacktrace_filename_line.slice(0 + 1, stacktrace_filename_line.indexOf(':'))
}
export function stacktrace_line_():number {
	const stacktrace_filename_line = stacktrace_filename_line_()
	return parseInt(stacktrace_filename_line.slice(
		stacktrace_filename_line.indexOf(':') + 1, stacktrace_filename_line.lastIndexOf(':'))
	)
}
export function stacktrace_line_pos_():string {
	const stacktrace_filename_line = stacktrace_filename_line_()
	return stacktrace_filename_line.slice(stacktrace_filename_line.lastIndexOf(':') + 1)
}
export function stacktrace_filename_line_(
	stack_line = stacktrace_()[3]
):string {
	return (
		stack_line.slice(stack_line.lastIndexOf('/'), stack_line.lastIndexOf(')'))
		|| stack_line.slice(stack_line.lastIndexOf('('), stack_line.lastIndexOf(')'))
	)
}
