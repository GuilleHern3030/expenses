const { app, BrowserWindow, Menu } = require('electron');

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 705,
    minWidth: 520, // Ancho mínimo
    minHeight: 660 // Alto mínimo
  });

  // Eliminar el menú por defecto
  Menu.setApplicationMenu(null);

  mainWindow.loadFile('src/index.html');
});