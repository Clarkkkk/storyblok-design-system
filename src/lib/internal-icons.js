/**
 * Internal icon paths
 */
const icons = {
  'add-block': {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M15 10a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 1-1zm-1.538-6a2.539 2.539 0 0 1 2.533 2.372l.005.166v.77a1 1 0 0 1-1.993.116L14 7.308v-.77a.539.539 0 0 0-.451-.531L13.462 6H6.538a.539.539 0 0 0-.531.451L6 6.538v6.924c0 .267.195.49.451.531l.087.007h.77a1 1 0 0 1 .116 1.993L7.308 16h-.77a2.539 2.539 0 0 1-2.533-2.372L4 13.462V6.538a2.539 2.539 0 0 1 2.372-2.533L6.538 4h6.924z"/>
    `,
  },
  'add-edit-block': {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M12 10a1 1 0 0 1 .993.883L13 11v2a2 2 0 0 0 1.85 1.995L15 15h2.585l-1.292-1.293a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.32-.083l.094.083 3 3a1 1 0 0 1 .083 1.32l-.083.094-3 3a1 1 0 0 1-1.497-1.32l.083-.094L17.585 17H15a4 4 0 0 1-3.995-3.8L11 13v-2a1 1 0 0 1 1-1zm1.462-6a2.539 2.539 0 0 1 2.533 2.372l.005.166v.77a1 1 0 0 1-1.993.116L14 7.308v-.77a.539.539 0 0 0-.451-.531L13.462 6H6.538a.539.539 0 0 0-.531.451L6 6.538v6.924c0 .267.195.49.451.531l.087.007h.77a1 1 0 0 1 .116 1.993L7.308 16h-.77a2.539 2.539 0 0 1-2.533-2.372L4 13.462V6.538a2.539 2.539 0 0 1 2.372-2.533L6.538 4h6.924z"/>
    `,
  },
  'apps-2': {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm0 2H5v14h14V5zm-7 1a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-2 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    `,
  },
  apps: {
    viewBox: '0 0 24 24',
    path: `
      <path fill="none" stroke="currentColor" stroke-width="2" d="M17.151 3.013c.854 0 1.708.326 2.359.977s.977 1.505.977 2.359c0 .853-.326 1.707-.977 2.358-.258.259-.53.464-.808.621h0l.88 1.345c.336.378.504.853.504 1.327a1.99 1.99 0 0 1-.586 1.414h0l-2.706 2.706c-1.207-1.294-1.377-2.092-1.932-2.646-.309-.31-.657-.46-1.013-.46a1.332 1.332 0 0 0-1.335 1.336c0 .342.13.683.39.944.303.302.64.453.987.46h0l1.807.035-2.701 4.124c-.4.448-.948.673-1.497.673A1.994 1.994 0 0 1 10.086 20h0L3.5 13.414A1.994 1.994 0 0 1 2.914 12c0-.512.195-1.024.586-1.414h0l2.682-2.682c1.225 1.27 1.4 2.068 1.956 2.623.31.31.657.46 1.013.46a1.332 1.332 0 0 0 1.336-1.336c0-.341-.13-.683-.391-.944-.302-.302-.64-.453-.986-.46h0l-1.807-.035 2.7-4.125A1.999 1.999 0 0 1 12.914 4h0l1.07 1.07c.258-.406.46-.732.74-1.012.74-.74 1.588-1.045 2.427-1.045z"/>
    `,
  },
  'arrow-backward': {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M10 20a1 1 0 0 1 0-2h3.5c2.78 0 5-2.035 5-4.5 0-2.396-2.098-4.387-4.77-4.495L13.5 9H10v1.382a1 1 0 0 1-1.447.894L3.789 8.894a1 1 0 0 1 0-1.788l4.764-2.382A1 1 0 0 1 10 5.618V7h4v.016c3.617.238 6.5 3.032 6.5 6.484s-2.883 6.246-6.5 6.484V20h-4z"/>
    `,
  },
  'arrow-forward': {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M14 20a1 1 0 0 0 0-2h-3.5c-2.78 0-5-2.035-5-4.5 0-2.396 2.098-4.387 4.77-4.495L10.5 9H14v1.382a1 1 0 0 0 1.447.894l4.764-2.382a1 1 0 0 0 0-1.788l-4.764-2.382A1 1 0 0 0 14 5.618V7h-4v.016c-3.617.238-6.5 3.032-6.5 6.484s2.883 6.246 6.5 6.484V20h4z"/>
    `,
  },
  'avatar-fallback': {
    viewBox: '0 0 24 24',
    path: `
      <g fill="none" fill-rule="evenodd">
        <circle cx="12" cy="12" r="11" fill="currentColor" stroke="#FFF" stroke-width="2"/>
        <path fill="#FFF" d="M10.53 14.47c.537.536 1.024.78 1.47.78.446 0 .933-.244 1.47-.78a.75.75 0 0 1 1.06 1.06c-.796.797-1.642 1.22-2.53 1.22-.888 0-1.734-.423-2.53-1.22a.75.75 0 0 1 1.06-1.06zM9 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        <circle cx="17.5" cy="13.5" r="2.5" fill="#1B243F" opacity=".091"/>
        <circle cx="6.5" cy="13.5" r="2.5" fill="#1B243F" opacity=".091"/>
      </g>
    `,
  },
  calendar: {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M15 4a1 1 0 0 1 1 1v1h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2V5a1 1 0 1 1 2 0v1h4V5a1 1 0 0 1 1-1zm3 9H6v5h12v-5zM8 8H6v3h12V8h-2v1a1 1 0 0 1-2 0V8h-4v1a1 1 0 1 1-2 0V8z"/>
    `,
  },
  'check-mark': {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M7.697 13.39a1 1 0 1 1 1.414-1.415l2.12 2.12 4.244-4.241a1 1 0 0 1 1.414 1.414l-4.938 4.937a1 1 0 0 1-1.426.012L7.697 13.39z"/>
    `,
  },
  'chevron-back': {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M10.387 8.21l-.094.083-3 3a1.006 1.006 0 0 0-.08.09l.08-.09a1.008 1.008 0 0 0-.292.675L7 12v.033l.004.052L7 12a1.008 1.008 0 0 0 .22.625l.073.082 3 3a1 1 0 0 0 1.497-1.32l-.083-.094L10.415 13H17a1 1 0 0 0 .117-1.993L17 11h-6.585l1.292-1.293a1 1 0 0 0 .083-1.32l-.083-.094a1 1 0 0 0-1.32-.083z"/>
    `,
  },
  'chevron-double': {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M10.121 10.776l2.121-2.12 2.122 2.12a1 1 0 0 0 1.414-1.414L12.95 6.534a.995.995 0 0 0-.53-.277l-.118-.014h-.118a.996.996 0 0 0-.648.29l-2.829 2.83a1 1 0 0 0 1.414 1.413zm0 2.76l2.121 2.12 2.122-2.12a1 1 0 0 1 1.414 1.414l-2.828 2.828a.995.995 0 0 1-.53.277l-.118.014h-.118a.996.996 0 0 1-.648-.29l-2.829-2.83a1 1 0 0 1 1.414-1.413z"/>
    `,
  },
  'chevron-down': {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M10.121 10.536l2.121 2.12 2.122-2.12a1 1 0 0 1 1.414 1.414l-2.828 2.828a.995.995 0 0 1-.53.277l-.118.014h-.118a.996.996 0 0 1-.648-.29l-2.829-2.83a1 1 0 0 1 1.414-1.413z"/>
    `,
  },
  'chevron-left': {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M14.363 14.777l-2.121-2.12 2.121-2.122A1 1 0 0 0 12.95 9.12l-2.83 2.83a.995.995 0 0 0-.277.53l-.014.118v.118a.997.997 0 0 0 .291.648l2.829 2.829a1 1 0 0 0 1.414-1.415z"/>
    `,
  },
  'chevron-right': {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M10.122 10.535l2.121 2.12-2.12 2.122a1 1 0 0 0 1.413 1.415l2.829-2.829a.995.995 0 0 0 .277-.53l.014-.118v-.118a.996.996 0 0 0-.291-.648L11.536 9.12a1 1 0 0 0-1.414 1.415z"/>
    `,
  },
  'chevron-up': {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M10.121 14.776l2.121-2.12 2.122 2.12a1 1 0 0 0 1.414-1.414l-2.828-2.828a.995.995 0 0 0-.53-.277l-.118-.014h-.118a.996.996 0 0 0-.648.29l-2.829 2.83a1 1 0 0 0 1.414 1.413z"/>
    `,
  },
  'chevron-clipboard': {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M13.586 12.172L15 13.586l1.414-1.414a1 1 0 1 1 1.414 1.414L16.414 15l1.414 1.414a1 1 0 1 1-1.414 1.414L15 16.414l-1.414 1.414a1 1 0 1 1-1.414-1.414L13.586 15l-1.414-1.414a1 1 0 1 1 1.414-1.414zM14.462 5a2.539 2.539 0 0 1 2.533 2.372l.005.166v.77a1 1 0 0 1-1.993.116L15 8.308v-.77a.539.539 0 0 0-.451-.531L14.462 7H7.538a.539.539 0 0 0-.531.451L7 7.538v6.924c0 .267.195.49.451.531l.087.007h.77a1 1 0 0 1 .116 1.993L8.308 17h-.77a2.539 2.539 0 0 1-2.533-2.372L5 14.462V7.538a2.539 2.539 0 0 1 2.372-2.533L7.538 5h6.924z"/>
    `,
  },
  close: {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M16.728 8.243a1 1 0 0 1 0 1.414l-2.829 2.827 2.829 2.83a1 1 0 1 1-1.414 1.414l-2.829-2.83-2.828 2.83a1 1 0 0 1-1.414-1.414l2.828-2.83-2.828-2.827a1 1 0 0 1 1.414-1.414l2.828 2.827 2.829-2.827a1 1 0 0 1 1.414 0z"/>
    `,
  },
  comment: {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M18.889 3C20.055 3 21 3.946 21 5.112v10.56c0 1.166-.834 2.334-2 2.334H7l-2.237 2.64A1 1 0 0 1 3 20V5.112C3 3.946 3.945 3 5.111 3H18.89zm0 2H5.11a.111.111 0 0 0-.102.069L5 5.112l-.001 12.16.475-.56a2 2 0 0 1 1.35-.7L7 16.006h11.89l.04-.06a.632.632 0 0 0 .061-.18l.009-.094V5.111a.111.111 0 0 0-.068-.102l-.043-.008z"/>
    `,
  },
  configuration: {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M16 13a1 1 0 0 1 1 1v1h2a1 1 0 0 1 0 2h-2v1a1 1 0 0 1-2 0v-1H4a1 1 0 0 1 0-2h11v-1a1 1 0 0 1 1-1zM7 5a1 1 0 0 1 1 1v1h11a1 1 0 0 1 0 2H8v1a1 1 0 0 1-2 0V9H4a1 1 0 1 1 0-2h2V6a1 1 0 0 1 1-1z"/>
    `,
  },
  content: {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M12.388 3.24l.12.06 9.035 5.34a1 1 0 0 1 .097 1.656l-.097.065L18.77 12l2.773 1.64a1 1 0 0 1 .097 1.656l-.097.065-9.034 5.338a1 1 0 0 1-.897.061l-.12-.06-9.035-5.34a1 1 0 0 1-.097-1.656l.097-.065L5.23 12l-2.773-1.64a1 1 0 0 1-.097-1.657l.097-.065L11.491 3.3a1 1 0 0 1 .897-.061zm4.416 9.92l-1.25.74-1.244.753-1.266.773a2 2 0 0 1-.367.176l-.168.097a1 1 0 0 1-.897.061l-.12-.06-.168-.098a2 2 0 0 1-.368-.176l-1.332-.812-1.585-.955-.034-.02-.81-.478-2.265 1.338L12 18.677l7.069-4.178-2.265-1.338zM12 5.323L4.93 9.5l2.456 1.45.654.384.91.54L12 13.678l2.45-1.448.418-.254 1.916-1.15.02.013L19.069 9.5 12 5.322z"/>
    `,
  },
  copy: {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M18 9a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3zm0 2h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-4.538-7a2.539 2.539 0 0 1 2.533 2.372l.005.166v.77a1 1 0 0 1-1.993.116L14 7.308v-.77a.539.539 0 0 0-.451-.531L13.462 6H6.538a.539.539 0 0 0-.531.451L6 6.538v6.924c0 .267.195.49.451.531l.087.007h.77a1 1 0 0 1 .116 1.993L7.308 16h-.77a2.539 2.539 0 0 1-2.533-2.372L4 13.462V6.538a2.539 2.539 0 0 1 2.372-2.533L6.538 4h6.924z"/>
    `,
  },
  cut: {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M7 4a3 3 0 0 1 2.707 4.294l2.303 2.302 5.182-5.182a1 1 0 1 1 1.415 1.414l-8.892 8.893A3 3 0 1 1 8.308 14.3l2.288-2.289-2.302-2.303a2.98 2.98 0 0 1-1.118.288L7 10a3 3 0 1 1 0-6zm8.121 9.707l3.536 3.536a1 1 0 1 1-1.414 1.414l-3.536-3.536a1 1 0 1 1 1.414-1.414zM7 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM7 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
    `,
  },
  delete: {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M12 4a3 3 0 0 1 2.954 2.474l.026.179.01.115.012.232H19a1 1 0 0 1 0 2h-1v9c0 1.657-1.24 3-2.77 3H8.77C7.24 21 6 19.657 6 18V9H5a1 1 0 1 1 0-2h4a3 3 0 0 1 3-3zm4 5H8v9c0 .513.343.936.785.993L8.89 19h6.222c.456 0 .832-.386.883-.883L16 18V9zm-5.25 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 1 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75zm2.5 0a.75.75 0 0 1 .75.75v3.5a.75.75 0 1 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75zM12 6a1 1 0 0 0-.993.883L11 7h2l-.007-.117A1 1 0 0 0 12 6z"/>
    `,
  },
  desktop: {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M16 19a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h8zm3-16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm0 2H5v10h14V5z"/>
    `,
  },
  edit: {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M13.515 6.293l-7.222 7.222a1 1 0 0 0-.293.707V17a1 1 0 0 0 1 1h2.778a1 1 0 0 0 .707-.293l7.222-7.222a1 1 0 0 0 0-1.414L14.93 6.293a1 1 0 0 0-1.414 0zm.707 2.121l1.363 1.363L9.362 16H8v-1.364l6.222-6.222z"/>
    `,
  },
  'folder-fill': {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M6 5h1.558a2 2 0 0 1 1.898 1.368l.088.264A2 2 0 0 0 11.442 8H18a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/>
    `,
  },
  folder: {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M7.558 5a2 2 0 0 1 1.898 1.368l.088.264A2 2 0 0 0 11.442 8H18a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1.558zm0 2H6v10h12v-7h-6.558a4 4 0 0 1-3.725-2.542l-.07-.193L7.558 7z"/>
    `,
  },
  form: {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M19 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h14zm0 2H5v2h14v-2zm0-14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm0 2H5v6h14V5z"/>
    `,
  },
  grid: {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M11 13v4H7v-4h4zm6 0v4h-4v-4h4zm-6-6v4H7V7h4zm6 0v4h-4V7h4z"/>
    `,
  },
  handle: {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M11 15v2H9v-2h2zm4 0v2h-2v-2h2zm-4-4v2H9v-2h2zm4 0v2h-2v-2h2zm-4-4v2H9V7h2zm4 0v2h-2V7h2z"/>
    `,
  },
  help: {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M12 5a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm-.188 9.277a.947.947 0 0 0-.682.255.857.857 0 0 0-.267.648c0 .258.087.47.261.638.174.168.403.252.688.252.286 0 .515-.084.689-.252a.85.85 0 0 0 .26-.638.857.857 0 0 0-.266-.648.947.947 0 0 0-.682-.255zm.118-6.925c-.82 0-1.468.21-1.943.632-.427.38-.665.891-.714 1.533l-.01.22h1.7c.008-.313.099-.558.272-.736.174-.178.406-.267.695-.267.61 0 .914.33.914.99 0 .22-.059.427-.176.625-.117.197-.353.453-.706.767-.354.315-.597.634-.73.958-.113.278-.178.638-.195 1.08l-.004.227h1.5l.024-.358c.036-.328.167-.62.39-.876l.12-.126.474-.45c.371-.36.63-.687.78-.982a2.07 2.07 0 0 0 .222-.94c0-.731-.229-1.296-.686-1.697-.457-.4-1.1-.6-1.927-.6z"/>
    `,
  },
  history: {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0 3a1 1 0 0 1 1 1v2.999L16 12a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
    `,
  },
  home: {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M8 20a3 3 0 0 1-3-3v-5.899a3 3 0 0 1 .953-2.193l4-3.733a3 3 0 0 1 4.094 0l4 3.733A3 3 0 0 1 19 11.101V17a3 3 0 0 1-3 3zm4.682-13.363a1 1 0 0 0-1.364 0l-4 3.733a1 1 0 0 0-.318.731V17a1 1 0 0 0 1 1h1v-3a3 3 0 0 1 2.824-2.995L12 12a3 3 0 0 1 3 3v3h1a1 1 0 0 0 .993-.883L17 17v-5.899a1 1 0 0 0-.318-.73zM12 14a1 1 0 0 0-1 1v3h2v-3a1 1 0 0 0-1-1z"/>
    `,
  },
  list: {
    viewBox: '0 0 24 24',
    path: `
      <path d="M8 13v4H4v-4h4zm12 0v4H10v-4h10zM8 7v4H4V7h4zm12 0v4H10V7h10z" fill="currentColor" stroke="none" stroke-width="1" fill-rule="evenodd"/>
    `,
  },
  loading: {
    viewBox: '0 0 24 24',
    path: `
      <g fill="none" fill-rule="evenodd">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.343 17.657A8 8 0 1 0 4 12">
          <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 12 12" to="360 12 12" repeatCount="indefinite"></animateTransform>
        </path>
      </g>
    `,
  },
  'log-out': {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M12 4a1 1 0 0 1 0 2H7v12h5a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6zm4.613 4.21l.094.083 3 3a.97.97 0 0 1 .08.09l-.08-.09a1.008 1.008 0 0 1 .292.675L20 12v.033l-.004.052L20 12a1.008 1.008 0 0 1-.22.625l-.073.082-3 3a1 1 0 0 1-1.497-1.32l.083-.094L16.584 13H10a1 1 0 0 1-.117-1.993L10 11h6.586l-1.293-1.293a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.32-.083z"/>
    `,
  },
  'menu-horizontal': {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M7.5 11a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm10 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
    `,
  },
  'menu-vertical': {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M10 17.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm0-10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm0 5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"/>
    `,
  },
  menu: {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M18 16a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2h12zm-5-5a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2h7zm5-5a1 1 0 0 1 0 2H6a1 1 0 1 1 0-2h12z"/>
    `,
  },
  minus: {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M16 11a1 1 0 0 1 .117 1.993L16 13H8a1 1 0 0 1 0-2h8z"/>
    `,
  },
  mobile: {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M15 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6zm0 2H9v12h6V6z"/>
    `,
  },
  'new-window': {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M9.933 5a1 1 0 0 1 .117 1.993L9.933 7h-3.2a.733.733 0 0 0-.726.634l-.007.1v9.533c0 .37.276.678.634.726l.1.007h9.533a.733.733 0 0 0 .726-.634l.007-.1v-3.2a1 1 0 0 1 1.993-.116l.007.117v3.2a2.733 2.733 0 0 1-2.567 2.728l-.166.005H6.733a2.733 2.733 0 0 1-2.728-2.567L4 17.267V7.733a2.733 2.733 0 0 1 2.567-2.728L6.733 5h3.2zm9.547-.978h.019l.07.004-.09-.004a1.008 1.008 0 0 1 .579.184.996.996 0 0 1 .129.11l.015.015a.988.988 0 0 1 .06.069l-.075-.085a1.007 1.007 0 0 1 .285.582l.003.025c.002.026.004.052.004.078v4.265a1 1 0 0 1-1.992.125l-.007-.125-.001-1.829-4.656 4.657a1 1 0 0 1-1.492-1.327l.078-.087 4.655-4.657h-1.827a1 1 0 0 1-.992-.874l-.008-.126a1 1 0 0 1 .874-.992l.126-.008h4.243z"/>
    `,
  },
  paste: {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M15 17a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h4zM13.462 4a2.539 2.539 0 0 1 2.533 2.372l.005.166v.77a1 1 0 0 1-1.993.116L14 7.308v-.77a.539.539 0 0 0-.451-.531L13.462 6H6.538a.539.539 0 0 0-.531.451L6 6.538v6.924c0 .267.195.49.451.531l.087.007h.77a1 1 0 0 1 .116 1.993L7.308 16h-.77a2.539 2.539 0 0 1-2.533-2.372L4 13.462V6.538a2.539 2.539 0 0 1 2.372-2.533L6.538 4h6.924zM18 14a1 1 0 0 1 0 2h-7a1 1 0 0 1 0-2h7zm-3-3a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h4z"/>
    `,
  },
  plus: {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M12 5a1 1 0 0 1 1 1v5h5a1 1 0 0 1 0 2h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5V6a1 1 0 0 1 1-1z"/>
    `,
  },
  refresh: {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M8.333 12.944a1 1 0 0 1 .117 1.994l-.117.006h-1.81l1.535 1.442a5.5 5.5 0 0 0 9.075-2.053A1 1 0 1 1 19.02 15a7.5 7.5 0 0 1-5.415 4.813 7.49 7.49 0 0 1-6.735-1.795l-.203-.196L5 16.255v2.023a1 1 0 0 1-.883.993L4 19.278a1 1 0 0 1-.993-.884L3 18.278v-4.344l.002-.06-.002.07a1.01 1.01 0 0 1 .198-.597 1.016 1.016 0 0 1 .073-.087l.008-.008a.741.741 0 0 1 .064-.061l-.072.069a1.01 1.01 0 0 1 .612-.309l.02-.002.045-.003.052-.002h4.333zm8.686-5.962l.204.196 1.665 1.565v-2.02a1 1 0 0 1 .884-.994l.117-.007a1 1 0 0 1 .993.884l.007.116v4.344l-.002.055.002-.065a1.01 1.01 0 0 1-.2.6 1.021 1.021 0 0 1-.071.084l-.009.01a1.006 1.006 0 0 1-.048.046l.057-.056a.996.996 0 0 1-.612.309l-.012.001a1.006 1.006 0 0 1-.055.004l-.05.002h-4.333a1 1 0 0 1-.117-1.994l.117-.006 1.808-.002-1.534-1.44a5.5 5.5 0 0 0-9.075 2.053A1 1 0 0 1 4.87 10a7.5 7.5 0 0 1 5.415-4.813 7.49 7.49 0 0 1 6.734 1.795z"/>
    `,
  },
  search: {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M7.697 7.197a5 5 0 0 1 7.708 6.292l2.898 2.9a1 1 0 0 1-1.414 1.414l-2.9-2.899a5.002 5.002 0 0 1-6.292-7.707zM9.11 8.61a3 3 0 1 0 4.243 4.243A3 3 0 0 0 9.11 8.61z"/>
    `,
  },
  settings: {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M12 3c1.247 0 2.33.697 2.883 1.722l.062.123c.276-.093.557-.15.845-.168l.216-.008a3.271 3.271 0 0 1 3.274 3.274c0 .362-.06.718-.175 1.054l-.011.029.21.106a3.273 3.273 0 0 1 1.69 2.682L21 12c0 1.247-.697 2.33-1.722 2.883l-.124.062c.094.276.15.557.17.845l.007.216a3.271 3.271 0 0 1-4.124 3.161l-.19-.057-.098.195a3.273 3.273 0 0 1-2.682 1.69L12.05 21a3.272 3.272 0 0 1-2.883-1.722l-.071-.141-.049.02a3.33 3.33 0 0 1-.838.166l-.216.008a3.271 3.271 0 0 1-3.161-4.124l.056-.19-.194-.098a3.273 3.273 0 0 1-1.69-2.682L3 12.05c0-1.247.697-2.33 1.722-2.883l.14-.071-.018-.049a3.272 3.272 0 0 1-.167-.838l-.008-.216A3.271 3.271 0 0 1 7.943 4.72c.362 0 .718.06 1.054.175l.029.01.106-.21a3.273 3.273 0 0 1 2.682-1.69zm0 2c-.703 0-1.273.57-1.273 1.273v.108a1.05 1.05 0 0 1-.636.96h-.051a1.05 1.05 0 0 1-1.158-.21l-.038-.037a1.273 1.273 0 1 0-1.801 1.8l.038.039c.3.307.383.765.21 1.158a1.05 1.05 0 0 1-.961.687h-.057a1.273 1.273 0 0 0 0 2.546h.108c.418.001.796.251.96.636.174.393.091.851-.21 1.158l-.037.038a1.273 1.273 0 1 0 1.8 1.801l.039-.038a1.05 1.05 0 0 1 1.158-.21c.405.149.677.53.687.961v.057a1.273 1.273 0 1 0 2.546 0v-.108a1.05 1.05 0 0 1 .636-.96 1.05 1.05 0 0 1 1.158.21l.038.037a1.273 1.273 0 1 0 1.801-1.8l-.038-.039a1.05 1.05 0 0 1-.21-1.158 1.05 1.05 0 0 1 .961-.636h.057a1.273 1.273 0 1 0 0-2.546h-.108a1.05 1.05 0 0 1-.96-.636v-.051a1.05 1.05 0 0 1 .21-1.158l.037-.038a1.273 1.273 0 1 0-1.8-1.801l-.039.038a1.05 1.05 0 0 1-1.158.21 1.05 1.05 0 0 1-.636-.961v-.057C13.273 5.57 12.703 5 12 5zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
    `,
  },
  'square-error': {
    viewBox: '0 0 24 24',
    path: `
      <g fill="none" fill-rule="evenodd">
        <rect width="16" height="16" x="4" y="4" fill="#FF6159" rx="3"/>
        <path fill="#FFF" d="M12 13a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
      </g>
    `,
  },
  'square-info': {
    viewBox: '0 0 24 24',
    path: `
      <g fill="none" fill-rule="evenodd">
        <rect width="16" height="16" x="4" y="4" fill="#395ECE" rx="3"/>
        <path fill="#FFF" d="M12 11a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </g>
    `,
  },
  'square-success': {
    viewBox: '0 0 24 24',
    path: `
      <g fill="none" fill-rule="evenodd">
        <rect width="16" height="16" x="4" y="4" fill="#2DB47D" rx="3"/>
        <path fill="#FFF" d="M15.611 9.27l.008.009c.37.374.37.977 0 1.352l-4.004 4.054a.934.934 0 0 1-.496.264l-.11.013-.111.001a.935.935 0 0 1-.618-.278l-2.003-2.027a.962.962 0 0 1 0-1.352.938.938 0 0 1 1.327-.008l.008.008 1.335 1.351 3.337-3.378a.938.938 0 0 1 1.327-.008z"/>
      </g>
    `,
  },
  'square-warning': {
    viewBox: '0 0 24 24',
    path: `
      <g fill="none" fill-rule="evenodd">
        <rect width="16" height="16" x="4" y="4" fill="#FFAC00" rx="3"/>
        <path fill="#FFF" d="M12.894 7.789l3.382 6.764A1 1 0 0 1 15.382 16H8.618a1 1 0 0 1-.894-1.447l3.382-6.764a1 1 0 0 1 1.788 0z"/>
      </g>
    `,
  },
  star: {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M12.358 6.086c.16.08.29.212.368.375l1.415 2.928 3.166.47a.824.824 0 0 1 .684.937.833.833 0 0 1-.236.473l-2.29 2.28.54 3.218a.825.825 0 0 1-.66.954.795.795 0 0 1-.514-.083L12 16.118l-2.831 1.52a.801.801 0 0 1-1.093-.347.842.842 0 0 1-.082-.524l.54-3.219-2.29-2.28A.839.839 0 0 1 6.23 10.1a.804.804 0 0 1 .463-.241l3.165-.47 1.416-2.928a.802.802 0 0 1 1.084-.375z"/>
    `,
  },
  status: {
    viewBox: '0 0 24 24',
    path: `
      <g fill="none" fill-rule="evenodd">
        <circle cx="12" cy="12" r="4" fill="currentColor"/>
        <path fill="currentColor" d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" opacity=".3"/>
      </g>
    `,
  },
  tablet: {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M17 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10zm0 2H7v14h10V5z"/>
    `,
  },
  'view-off': {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M19.778 4.222a1 1 0 0 1 0 1.414l-1.83 1.83c.228.207.451.425.67.653 1.048 1.098 1.765 2.19 2.164 2.974a2 2 0 0 1 0 1.814c-.399.784-1.116 1.876-2.165 2.974C16.782 17.804 14.574 19 12 19c-1.584 0-3.03-.453-4.335-1.25l-2.029 2.028a1 1 0 1 1-1.414-1.414l1.83-1.83a12.943 12.943 0 0 1-.67-.653c-1.048-1.098-1.765-2.19-2.164-2.974a2 2 0 0 1 0-1.814c.399-.784 1.116-1.876 2.165-2.974C7.218 6.196 9.426 5 12 5c1.584 0 3.03.453 4.335 1.25l2.029-2.028a1 1 0 0 1 1.414 0zm-3.246 4.662l-1.824 1.823a3 3 0 0 1-4 4l-1.571 1.57c.839.436 1.796.723 2.863.723 2.636 0 4.603-1.75 5.77-3.18l.127-.158.24-.315.056-.076.054-.075.198-.283.168-.256.138-.221.151-.257L19 12l-.19-.34-.197-.317-.168-.256-.198-.283-.054-.075-.055-.076-.241-.315a11.248 11.248 0 0 0-1.365-1.454zM12 7c-2.636 0-4.603 1.75-5.77 3.18l-.127.158-.24.315-.056.076-.054.075-.198.283-.168.256-.138.221-.151.257L5 12l.19.34.197.317.168.256.198.283.054.075.055.076.241.315c.368.467.825.977 1.366 1.455l1.824-1.823a3 3 0 0 1 4-4.002l1.57-1.57C14.024 7.288 13.067 7 12 7z"/>
    `,
  },
  view: {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M12 5c2.574 0 4.782 1.196 6.617 3.119 1.049 1.098 1.766 2.19 2.165 2.974a2 2 0 0 1 0 1.814c-.399.784-1.116 1.876-2.165 2.974C16.782 17.804 14.574 19 12 19s-4.782-1.196-6.617-3.119c-1.049-1.098-1.766-2.19-2.165-2.974a2 2 0 0 1 0-1.814c.399-.784 1.116-1.876 2.165-2.974C7.218 6.196 9.426 5 12 5zm0 2c-2.733 0-4.748 1.883-5.897 3.338l-.24.315-.11.15-.198.284-.168.256-.138.221-.151.257L5 12l.19.34.197.317.168.256.198.283c.035.05.072.1.11.151l.24.315C7.252 15.117 9.267 17 12 17s4.748-1.883 5.897-3.338l.24-.315.11-.15.198-.284.168-.256.138-.221.151-.257L19 12l-.19-.34-.197-.317-.168-.256-.198-.283c-.035-.05-.072-.1-.11-.151l-.24-.315C16.748 8.883 14.733 7 12 7zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
    `,
  },
  'x-clear': {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm2.75 5.255a.863.863 0 0 0-1.221 0l-1.526 1.527-1.527-1.527a.863.863 0 1 0-1.22 1.221l1.526 1.527-1.527 1.526a.863.863 0 0 0 1.221 1.22l1.527-1.525 1.526 1.526a.863.863 0 0 0 1.22-1.221l-1.525-1.526 1.526-1.527a.863.863 0 0 0 0-1.22z"/>
    `,
  },
  'workflow-changes': {
    viewBox: '0 0 24 24',
    path: `
      <path fill="currentColor" fill-rule="evenodd" d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/>
    `,
  },
}

const pictogramIcons = {
  'delete-pictogram-2': {
    viewBox: '0 0 24 24',
    path: `
      <g fill="none" fill-rule="evenodd">
        <circle cx="12" cy="12" r="12" fill="#ff6159"/>
        <g transform="scale(0.8 0.8) translate(3 1.8)">
          <path fill="#fff" fill-rule="evenodd" d="M12 4a3 3 0 0 1 2.954 2.474l.026.179.01.115.012.232H19a1 1 0 0 1 0 2h-1v9c0 1.657-1.24 3-2.77 3H8.77C7.24 21 6 19.657 6 18V9H5a1 1 0 1 1 0-2h4a3 3 0 0 1 3-3zm4 5H8v9c0 .513.343.936.785.993L8.89 19h6.222c.456 0 .832-.386.883-.883L16 18V9zm-5.25 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 1 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75zm2.5 0a.75.75 0 0 1 .75.75v3.5a.75.75 0 1 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75zM12 6a1 1 0 0 0-.993.883L11 7h2l-.007-.117A1 1 0 0 0 12 6z"/>
        </g>
      </g>
    `,
  },
  'delete-pictogram': {
    viewBox: '0 0 24 24',
    path: `
      <g fill="none" fill-rule="evenodd">
        <circle cx="12" cy="12" r="12" fill="#FFD7D5"/>
        <g transform="translate(6 4.5)">
          <path fill="#FF8983" d="M1.552 12.445c.041.593.588 1.055 1.247 1.055h6.402c.66 0 1.206-.462 1.247-1.055L11 4.5H1l.552 7.945z"/>
          <path fill="#FF6159" d="M8 .5a1 1 0 0 1 1 1h2a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2h2a1 1 0 0 1 1-1h4z"/>
        </g>
      </g>
    `,
  },
  'caution-pictogram': {
    viewBox: '0 0 24 24',
    path: `
      <g fill="none" fill-rule="evenodd">
        <circle cx="12" cy="12" r="12" fill="#FFEABF"/>
        <path fill="#FFC140" d="M12.957 6.062a2 2 0 0 1 .799.799l3.917 7.181A2 2 0 0 1 15.917 17H8.082a2 2 0 0 1-1.755-2.958l3.917-7.181a2 2 0 0 1 2.713-.799zM12 14a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm0-4a.5.5 0 0 0-.5.5v2a.5.5 0 1 0 1 0v-2a.5.5 0 0 0-.5-.5z"/>
      </g>
    `,
  },
  'success-pictogram': {
    viewBox: '0 0 24 24',
    path: `
      <g fill="none" fill-rule="evenodd">
        <circle cx="12" cy="12" r="12" fill="#D9F4F3"/>
        <path fill="#00B3B0" d="M7.697 13.39a1 1 0 1 1 1.414-1.415l2.12 2.12 4.244-4.241a1 1 0 0 1 1.414 1.414l-4.938 4.937a1 1 0 0 1-1.426.012L7.697 13.39z"/>
      </g>
    `,
  },
  'upload-pictogram': {
    viewBox: '0 0 24 24',
    path: `
      <g fill="none" fill-rule="evenodd">
        <circle cx="12" cy="12" r="12" fill="#D9F4F3"/>
        <path fill="#00B3B0" d="M8.21 13.613l.083.094 3 3a.97.97 0 0 0 .09.08l-.09-.08a1.008 1.008 0 0 0 .675.292L12 17h.033l.052-.004L12 17a1.008 1.008 0 0 0 .625-.22l.082-.073 3-3a1 1 0 0 0-1.32-1.497l-.094.083L13 13.585V7a1 1 0 0 0-1.993-.117L11 7v6.585l-1.293-1.292a1 1 0 0 0-1.32-.083l-.094.083a1 1 0 0 0-.083 1.32z"/>
      </g>
    `,
  },
}

export default {
  ...icons,
  ...pictogramIcons,
}
