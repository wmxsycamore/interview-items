parseMoney(1234.56); // 1,234.56

function parseMoney(num) {
    num = parseFloat(num.toFixed(3));
    let [integer, decimal] = String.prototype.split.call(num, '.');
    integer = integer.replace(/\d(?=(\d{3})+$)/g, '$&,');
    return integer + '.' + (decimal? decimal: '');
}