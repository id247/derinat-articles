// export const OAuthOptions = {
// 	provider: 'derinatLocal',
// 	authUrl: 'https://login.staging.dnevnik.ru/oauth2',
// 	grantUrl: 'https://api.staging.dnevnik.ru/v1/authorizations',
// 	scope: 'Avatar,FullName,Roles,Lessons,Relatives',	
// 	clientId: '1a3b7aca792d470cae448f41451e2ee1',
// 	redirectUrl: '//localhost:9000/oauth.html',
// }

// export const APIoptions = {	
// 	base: 'https://api.staging.dnevnik.ru/v1/',
// }

// export const PromoOptions = {	
// 	url: 'http://localhost:9000',
// 	server: 'https://staging.dnevnik.ru',
// }

export const CommentsOptions = {	
	pageSize: 15,
	adminId: [
		'1000005449055',
		'1000001035607'
	],
	anonAvatar: 'https://static.dnevnik.ru/images/avatars/user/a.m.jpg',
}


export const OAuthOptions = {
	provider: 'derinatStaging',
	authUrl: 'https://login.dnevnik.ru/oauth2',
	grantUrl: 'https://api.dnevnik.ru/v1/authorizations',
	scope: 'Avatar,FullName,Roles,Lessons,Relatives',	
	clientId: '1a3b7aca792d470cae448f41451e2ee1',
	redirectUrl: '//localhost:9000/oauth.html',
}

export const APIoptions = {	
	base: 'https://api.dnevnik.ru/v1/',
}

export const PromoOptions = {	
	url: 'http://localhost:9000',
	server: 'https://staging.dnevnik.ru',
	cdn: 'http://localhost:9000/assets/',
}
