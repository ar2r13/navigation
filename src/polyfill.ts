import { Navigation } from './navigation'

Object.defineProperty(window, 'navigation', {
	value: new Navigation,
	enumerable: true,
	configurable: false,
})
  
window.addEventListener('click', windowClickHandler)
window.addEventListener('popstate', () => 
	window.navigation.navigate(location.pathname)
)

function windowClickHandler (event) {
	const anchor = event.composedPath().find(({ tagName }) => tagName === 'A')

	if (!anchor?.href 
        || new URL(anchor.href).hash
        || anchor.target 
        || anchor.hasAttribute('download') 
        || anchor.getAttribute('rel') === 'external') return

	event.preventDefault()
	window.navigation.navigate(anchor.href, {
		info: { 
			type: `${anchor.nodeName.toLowerCase()}-click` 
		}
	})
}