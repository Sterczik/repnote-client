export default (name) => {
  /* eslint-disable no-useless-escape, indent */
  const names = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
  /* eslint-disable prefer-template, indent */
  const regex = new RegExp('[\\?&]' + names + '=([^&#]*)')
  const results = regex.exec(window.location.search)
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))
}
