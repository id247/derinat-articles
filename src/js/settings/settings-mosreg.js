export const OAuthOptions = {
	provider: 'derinatschool.mosreg',
	authUrl: 'https://login.school.mosreg.ru/oauth2',
	grantUrl: 'https://api.school.mosreg.ru/v1/authorizations',
	scope: 'Avatar,FullName,Roles,Lessons,Relatives',	
	clientId: 'd1f4405e12ea455eb6f95bd99c07431e',
	redirectUrl: 'https://ad.school.mosreg.ru/promo/oauth2',
}

export const APIoptions = {	
	base: 'https://api.school.mosreg.ru/v1/',
}

export const PromoOptions = {	
	url: 'https://ad.dnenvik.ru/promo/wishlist3',
	server: 'https://school.mosreg.ru',
}

export const CommentsOptions = {	
	pageSize: 15,
	adminId: [
		'1000005031742',
	],
	anonAvatar: 'https://static.school.mosreg.ru/images/avatars/user/a.m.jpg',
}
