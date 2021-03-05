import FileSaver from 'file-saver';

/**
 * Create a blob with the Milkshake Icon SVG and download the file as [milkshakeName].svg
 *
 * @param {string} milkshakeName The milkshake recipe name
 */
export const exportMilkshakeIcon = (milkshakeName: string) => {
    let milkshakeIconSVG = document.getElementById('shake-icon-svg');

    var blob = new Blob([milkshakeIconSVG.innerHTML], {
        type: 'image/svg+xml',
    });

    FileSaver.saveAs(blob, `${milkshakeName}.svg`);
};
