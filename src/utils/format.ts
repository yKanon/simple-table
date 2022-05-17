export default function format(str: string, ...args: any[]): string {
  var args = arguments;
  return this.replace(/{([0-9]*)}/g, function (match, number) {
    return typeof args[number] != 'undefined' ? args[number] : match;
  });
}
