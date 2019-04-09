module.exports = {
    layouts: 'view/layouts',
    partials: 'view/partials',
    data: process.env.NODE_ENV === 'development' ? 'view/data' : 'view/data/prod'
};