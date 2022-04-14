function FindProxyForURL(url, host) {

    // use proxy for specific domains
    if (dnsDomainIs(host, "*.goguardian.*")||dnsDomainIs(host, "goguardian.*.*")||dnsDomainIs(host, "*.goguardian.*.*")||dnsDomainIs(host, "*.pusher.com")||dnsDomainIs(host, "*goguardian.*.*")){
        return "PROXY 0.0.0.0:8080";
		}
		else{
    // by default use no proxy
    return "DIRECT";
		}
}
