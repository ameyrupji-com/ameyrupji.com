module.exports = {
    layouts: 'layouts',
    partials: 'partials',
    data: process.env.NODE_ENV === 'development' ? 'data_local' : 'data_production',
};