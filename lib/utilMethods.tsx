// import JSZip from 'jszip'
// import { saveAs } from 'file-saver'
// import xml from 'xmlserializer'

export const Util = {
  colors: [
    // '#F79394',
    // '#96E0F5',
    // '#ABE3A2',
    '#ffe96b',
    '#FFCDA1',
    '#F79394',
    '#F99ED4',
    '#E19BF3',
    '#AFB5F4',
    '#96E0F5',
    '#ABE3A2',
    '#92E3DD',
    '#9CB6C2'
  ],

  getYYYYMMDD: (): string => {
    const pad2 = (n: number) => {
      return n < 10 ? '0' + n : n;
    };
    const date = new Date();
    return (
      date.getFullYear().toString() +
      pad2(date.getMonth() + 1) +
      pad2(date.getDate()) +
      pad2(date.getHours()) +
      pad2(date.getMinutes()) +
      pad2(date.getSeconds())
    );
  },
  getMMSS: (): string => {
    const pad2 = (n: number) => {
      return n < 10 ? '0' + n : n;
    };
    const date = new Date();
    return '' + pad2(date.getMinutes()) + ':' + pad2(date.getSeconds());
  },
  exportCSVFile: (csv: string, fileName: string, header?: string): void => {
    if (header) csv = [header, csv].join('\n');
    const fileType = 'txt/csv;charset=utf-8';
    const e = document.createElement('a');
    e.setAttribute('href', 'data:' + fileType + ',' + encodeURIComponent(csv));
    e.setAttribute('download', fileName);
    e.style.display = 'none';
    document.body.appendChild(e);
    e.click();
    document.body.removeChild(e);
  },
  zeroPad: (num: number, numZeros: number): string => {
    const n = Math.abs(num);
    const zeros = Math.max(0, numZeros - Math.floor(n).toString().length);
    let zeroString = Math.pow(10, zeros).toString().substr(1);
    if (num < 0) {
      zeroString = '-' + zeroString;
    }
    return zeroString + n;
  },
  isFloat: (val: string): boolean => {
    return Number(val) === parseFloat(val) && Number(val) % 1 !== 0;
  },
  isInteger: (val: string): boolean => {
    return Number(val) === parseInt(val, 10);
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getHeader: (item: any): string[] => {
    const temp: string[] = [];
    for (const [key] of Object.entries(item)) {
      temp.push(key);
    }
    return temp;
  },
  getIndexArray: (max: number, includeMax = false): number[] => {
    const arr = [];
    for (let idx = 0; idx < max; idx++) {
      arr.push(idx);
    }
    if (includeMax) arr.push(max);
    return arr;
  },
  getFileNameFromPath: (fullPath: string): string => {
    return fullPath.replace(/^.*[\\/]/, '');
  },
  copyToClipboard: (text: string) => {
    try {
      const tmpTextarea = document.createElement('textarea');
      tmpTextarea.value = text;

      document.body.appendChild(tmpTextarea);
      tmpTextarea.select();
      tmpTextarea.setSelectionRange(0, text.length);

      document.execCommand('copy');
      document.body.removeChild(tmpTextarea);
      alert('Copied!');
    } catch (_) {
      alert('Copy failed!');
    }
  },
  changeToBr: (text: string): any => {
    return text.split('\n').map((el: string) => <div>{el}</div>);
  },
  hashCode: (text: string | number): number => {
    let hash = 0,
      chr: number;
    if (text === undefined) return 0;
    if (typeof text === 'number') return text;
    else {
      if (text.length === 0 || typeof text !== 'string') return hash;
      if (parseInt(text, 10) < 100) return parseInt(text, 10) - 1;
      for (let n = 0; n < text.length; n++) {
        chr = text.charCodeAt(n);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
      }
      return hash;
    }
  }
};

// type ChartOption = {
//   ratio?: string;
//   addNumberingName?: string;
//   chartType?: string;
// };
// export const Chart = {
//   /**
//    * @param chartSource source of used echart.
//    * @param chartName chart name, used finding chart class. (ex. ${chartSource[n][chartName]}-mcs-chart).
//    * if you used only string chart-name, then chartName is ''
//    * if chartName === '' then can't use option.addNumberingName
//    * @param zipName zip file name
//    * @param success callback function when success
//    * @param option { ChartOption }
//    */
//   downloadZip: (
//     chartSource: any[],
//     chartName: string,
//     zipName: string,
//     success: () => void,
//     option?: ChartOption): void => {
//     const _option: ChartOption = { ratio: '100', chartType: 'canvas', ...option }
//     const zip = new JSZip()
//     if (chartName === '') {
//       for (const n in chartSource) {
//         const wrapper = document.getElementsByClassName(`${chartSource[n]}-mcs-chart`)
//         if (wrapper) {
//           if (_option.chartType === 'svg') {
//             const svg = wrapper[0].getElementsByTagName('svg')[0]
//             const copySVG = svg.cloneNode(true) as SVGSVGElement
//             const s = xml.serializeToString(copySVG)
//             zip.file(`${chartSource[n]}.svg`, s)
//           } else {
//             const canvas = wrapper[0].getElementsByTagName('canvas')[0]
//             const resizeCanvas = document.createElement('canvas')
//             const ctx = resizeCanvas.getContext('2d')
//             if (ctx) {
//               const _w = Math.round(canvas.getBoundingClientRect().width * (parseInt(_option.ratio || '100', 10) / 100))
//               const _h = Math.round(canvas.getBoundingClientRect().height * (parseInt(_option.ratio || '100', 10) / 100))
//               resizeCanvas.width = _w
//               resizeCanvas.height = _h
//               ctx.drawImage(canvas, 0, 0, _w, _h)
//             }
//             const base64Image = resizeCanvas.toDataURL().replace(/^data:image\/(png|jpg);base64,/, '')
//             zip.file(`${chartSource[n]}.png`, base64Image, { base64: true })
//           }
//         }
//       }
//     } else {
//       for (const n in chartSource) {
//         const wrapper = document.getElementsByClassName(`${chartSource[n][chartName]}-mcs-chart`)
//         if (wrapper) {
//           if (_option.chartType === 'svg') {
//             const svg = wrapper[0].getElementsByTagName('svg')[0]
//             const copySVG = svg.cloneNode(true) as SVGSVGElement
//             copySVG.setAttribute('background-color', '#fff')
//             // console.log(copySVG.viewBox.baseVal)
//             const s = xml.serializeToString(copySVG)
//             zip.file(`${chartSource[n][chartName]}.svg`, s)
//           } else {
//             const canvas = wrapper[0].getElementsByTagName('canvas')[0]
//             const resizeCanvas = document.createElement('canvas')
//             const ctx = resizeCanvas.getContext('2d')
//             if (ctx) {
//               const _w = Math.round(canvas.getBoundingClientRect().width * (parseInt(_option.ratio || '100', 10) / 100))
//               const _h = Math.round(canvas.getBoundingClientRect().height * (parseInt(_option.ratio || '100', 10) / 100))
//               resizeCanvas.width = _w
//               resizeCanvas.height = _h
//               ctx.drawImage(canvas, 0, 0, _w, _h)
//             }
//             const base64Image = resizeCanvas.toDataURL().replace(/^data:image\/(png|jpg);base64,/, '')
//             if (_option.addNumberingName) {
//               zip.file(`${Util.zeroPad(chartSource[n][_option.addNumberingName], 5)}_${chartSource[n][chartName]}.png`, base64Image, { base64: true })
//             } else {
//               zip.file(`${chartSource[n][chartName]}.png`, base64Image, { base64: true })
//             }
//           }
//         }
//       }
//     }
//     zip.generateAsync({ type: 'blob' }).then(content => {
//       saveAs(content, `${zipName}.zip`)
//       success()
//     })
//   },
//   colors: ['#4424A7', '#8378ea', '#9d96f5', '#e7bcf3', '#e690d1', '#fb7293', '#ff9f7f', '#ffdb5c', '#9fe6b8', '#67e0e3', '#37a2da']
// }

export default Util;
