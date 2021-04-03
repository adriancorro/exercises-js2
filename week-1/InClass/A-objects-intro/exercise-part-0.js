/*

Describe your own laptop as a JavaScript object

Try to think of as many properties as you can!

*/

let laptop = {
  brand: "Lenovo",
  screenSize: 13,
  isTouchscreen: true,
  procesador: {
    marca: 'intel',
    cantidadDeProcesadores: 8
  },
  camara: 'high vision',
  color: 'rojo y negro',
  memoriaRam: 8,
  almacenamiento: ['hdd', 'ssd', 'cdrom', 'floppy', 'usb', 'microsd'],
  puertos: ['wga', 'usb', 'hdmi', 'ethernet'],
  so: {
    marca: 'windows',
    version: 'XP',
    parche: '1.0.3'
  },
  encender: () => {
    console.log('peep poop')
  }

};