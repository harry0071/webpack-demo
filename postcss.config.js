const currentTarget = process.env.npm_lifecycle_event;
module.exports = {
	plugins: {
		'postcss-import': {},
		'postcss-cssnext': {},
		//'cssnano': {} 压缩css

	}
}
if (currentTarget == 'build') {
		module.exports.plugins.cssnano = {}
	}
//process.env.NODE_ENV : mode的值：development或者production
//process.env.npm_lifecycle_event npm run xxx中的xxx