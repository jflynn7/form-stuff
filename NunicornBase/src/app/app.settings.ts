export class AppSettings {

  public static APP_NAME = 'Angular Playground';

  public static HTTP_RETRIES =  1;

  /// HEADER
  public static HEADER_HEIGHT = 65; // px

  /// CARD LAYOUTS
  public static DEFAULT_CARD_PADDING = 30; // px
  public static DEFAULT_CARD_MARGIN = 15; // px
  public static DEFAULT_CARD_TITLE_FONT_SIZE = 20; // px

  /// API
  public static API_BASE = 'http://192.168.33.10/api';
  public static LOGIN_API = `${AppSettings.API_BASE}/user/login`;
  public static LOGOUT_API = `${AppSettings.API_BASE}/user/logout`;
  public static AUTH_CHECK_API = `${AppSettings.API_BASE}/user/isLoggedIn`;
  public static UPDATE_PROFILE_API = `${AppSettings.API_BASE}/userProfile/update`;

  /// XSRF
  public static XSRF_COOKIE_NAME = 'Nunicorn_XSRF_COOKIE';
  public static XSRF_HEADER_NAME = 'Nunicorn_XSRF_HEADER';

  /// FORMATS
  public static DISPLAY_DATE_FORMAT = 'YYYY-DD-MM';
  public static INPUT_DATE_FORMAT = 'YYYY-DD-MM';

  /// PAGE ROUTES
  public static LOGIN_PAGE = '/';
  public static LOGOUT_PAGE = '/logout';

  public static USER_PROFILE_HOME = '/user-profile-home';
  public static USER_PROFILE_DETAILS = '/user-profile-details';
  public static USER_PROFILE_ADDRESSES = '/user-profile-addresses';
  public static USER_PROFILE_EMPLOYMENT = '/user-profile-employment';
  public static USER_PROFILE_SETTINGS = '/user-profile-settings';
}
