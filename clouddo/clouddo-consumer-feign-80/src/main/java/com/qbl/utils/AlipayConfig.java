package com.qbl.utils;

import java.io.FileWriter;
import java.io.IOException;

/* *
 *类名：AlipayConfig
 *功能：基础配置类
 *详细：设置帐户有关信息及返回路径
 *修改日期：2017-04-05
 *说明：
 *以下代码只是为了方便商户测试而提供的样例代码，商户可以根据自己网站的需要，按照技术文档编写,并非一定要使用该代码。
 *该代码仅供学习和研究支付宝接口使用，只是提供一个参考。
 */

public class AlipayConfig {
	
//↓↓↓↓↓↓↓↓↓↓请在这里配置您的基本信息↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

	// 应用ID,您的APPID，收款账号既是您的APPID对应支付宝账号
	public static String app_id = "2016101100657355";
	
	// 商户私钥，您的PKCS8格式RSA2私钥
    public static String merchant_private_key = "MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCcH2QJ6kI4QuSqEXe+5khsAUWbWvPJakzwlGpQbffEW5CSDry8YPiX0JWB8qzQDg2KFFkd3HDs8JpP4Rv8bSkFqMQAEtV3G4zgFq1bXuWGh0T49jcYgwJaPXIg9U8Op33l5chF5sd2MZ9/G0t1rEvMKHLCf8vOXNhHCfQgdFX9oMsyfhZkq6FU4QUdBHqYksT/urZDBkO+M9UebN9beJ6AP5MOHS6hKd/AcafKbjYPK9TrGwSe2L9KDUqfjMb0ul24UffMOe2eyjaz+63DMxOcLehlw/fW1mpQDQwOnFzvLel1gE+iuhvYnPyUygurqegKBDyWxJzl6s96UpDfduQbAgMBAAECggEBAIOgW6GYZdg1XcCdFY5XbPvSXrNKjXtlKhUzrCa/cEOWx169Ghbg0vZ8H3D9/wEyt+uQmEn6zyKVACUUr5m1Fv70eLtvJZZUHgPYWrRMX8t6RIZ6X51E5zjZ0V1ENTEvuY+Yma+FkOlvkP+DLa26Y/VurMKbKGOGF7pdA/xQ2ScJlmpCHBND1QoekCCnDxDZF94Sz/CnWBk3SgbT0jq7/s/Y4izrTAsxkyg8IZ+nujpwU+ecS2u1y6yvG8lKmOZF9y7OGDQ8AqR8WU2ZB3uVOlAY2oFB0iXUMZeSnfcPQSjVe8M26wTgpqUYhU6ZvwH6f7FopmRt5whiJIvuLPUfHYECgYEA0zU3PA42ZVSfRMDamDtiTFEKMb6FBYqnkX+znNWcJ0tLOZRKIkoivd5LpPQR4l6DRizk3e57H2QUHyJ0pHTsAQ2DA4QflfHPUXQPcUgtgJZ/Rf2V+jprlR8NqVf434pJhzbTsLfRAf7Vq80zSOclJZTGg0uTnVLOw5kMqA3gWzsCgYEAvTuEHF9MZXooJcFm1Hlp600TP/7s27dwHdv73tChQZCi+2fET3G3cMlrhwpk19rArRmFTI9te2oppiKwxLFGXPEPP5ZbFQCc8gv0s11Dr9DSYYh4n8qW9il2j8SF7eezk05/e8o/leZY+HnUnXs5dpOiCqpTvXxwUa7CV6pYTKECgYEAzGHTyHbMZrRDx2mEXwogLk/BuK9v1BP/4cmcyujeyhuPePGp55KsGeYSd1aEM/VXvUHWW3jahl73JcXW8AoBE2e6310sn5I3F9Bi3TGGbsez88vYJSQBVXWOZ9Askk0kqAcDRSArzm2G4VCaDzM2fC6DByzMdNJcKWVinQGImV8CgYEAr1640JKA+op7KoJSChd7UdXcQTK/z9/wx7tXcOdoiprAcL158SYyGxSP0laPnnvclI9SOeGyVO3OK2l66M5hp0DAIO32+z/WM3thC9kjIY0la75OC8h0ny1N827tr81LXvkgrFiDFSiky6IcqNXKK1omkjvH35Ozg/+xnA0CSAECgYBLaPLi7XuxOBVhW1ChhlzxbiUcnaZjC/bgF2Wy8omCREW2TidYdBW164QJsTYLjX44h1RQgyXYxlR036k1ZEw6f+3+uB6CuS/x1pbbEMcpN/XClf0qLUMYEDQxOzX7QXlnTxNVZqCgdJFX819QJOqCmK1pNjFR+5TrXTZGog1zvQ==";
	
	// 支付宝公钥,查看地址：https://openhome.alipay.com/platform/keyManage.htm 对应APPID下的支付宝公钥。
    public static String alipay_public_key = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnB9kCepCOELkqhF3vuZIbAFFm1rzyWpM8JRqUG33xFuQkg68vGD4l9CVgfKs0A4NihRZHdxw7PCaT+Eb/G0pBajEABLVdxuM4BatW17lhodE+PY3GIMCWj1yIPVPDqd95eXIRebHdjGffxtLdaxLzChywn/LzlzYRwn0IHRV/aDLMn4WZKuhVOEFHQR6mJLE/7q2QwZDvjPVHmzfW3iegD+TDh0uoSnfwHGnym42DyvU6xsEnti/Sg1Kn4zG9LpduFH3zDntnso2s/utwzMTnC3oZcP31tZqUA0MDpxc7y3pdYBPorob2Jz8lMoLq6noCgQ8lsSc5erPelKQ33bkGwIDAQAB";

	// 服务器异步通知页面路径  需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问
	public static String notify_url = "http://localhost:80/notify_url";

	// 页面跳转同步通知页面路径 需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问
	public static String return_url = "http://localhost:80/return_url";

	// 签名方式
	public static String sign_type = "RSA2";
	
	// 字符编码格式
	public static String charset = "utf-8";
	
	// 支付宝网关
	public static String gatewayUrl = "https://openapi.alipaydev.com/gateway.do";
	
	// 支付宝网关
	public static String log_path = "https://openapi.alipaydev.com/gateway.do";


//↑↑↑↑↑↑↑↑↑↑请在这里配置您的基本信息↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    /** 
     * 写日志，方便测试（看网站需求，也可以改成把记录存入数据库）
     * @param sWord 要写入日志里的文本内容
     */
    public static void logResult(String sWord) {
        FileWriter writer = null;
        try {
            writer = new FileWriter(log_path + "alipay_log_" + System.currentTimeMillis()+".txt");
            writer.write(sWord);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (writer != null) {
                try {
                    writer.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}

