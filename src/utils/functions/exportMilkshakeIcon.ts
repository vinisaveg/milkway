import FileSaver from 'file-saver';

/**
 * Create a blob with the Milkshake Icon SVG and download the file as [milkshakeName].html
 *
 * @param {string} milkshakeName The milkshake recipe name
 */
export const exportMilkshakeIcon = (milkshakeName: string) => {
    let milkshakeIconSVG = document.getElementById('shake-icon-svg');

    var blob = new Blob([milkshakeIconSVG.innerHTML], {
        type: 'text/html;charset=utf-8',
    });

    FileSaver.saveAs(blob, `${milkshakeName}.svg`);
};
