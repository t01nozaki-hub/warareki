const ftp = require("basic-ftp");
const readline = require("readline");
const path = require("path");
const fs = require("fs");

async function deploy() {
    console.log("-----------------------------------------");
    console.log("  Xserver Deployment Script (Interactive)");
    console.log("-----------------------------------------");

    // FTPパスワード
    const password = "ntp6ed0i";

    const client = new ftp.Client();
    client.trackProgress(info => {
        if (info.name) {
            console.log(`[進捗]: ${info.name} をアップロード中...`);
        }
    });
    client.ftp.verbose = false; 

    try {
        console.log("\nConnecting to sv16670.xserver.jp...");
        await client.access({
            host: "sv16670.xserver.jp",
            user: "xs578979",
            password: password,
            secure: true,
            secureOptions: {
                rejectUnauthorized: false // エックスサーバーの証明書エラーを回避
            }
        });

        console.log("Connected successfully.");

        // 宛先ディレクトリの設定
        const remoteDir = "/warareki.com/public_html";
        console.log(`Checking directory: ${remoteDir}`);
        await client.ensureDir(remoteDir);
        
        console.log("Skipping clearWorkingDir for speed...");
        // await client.clearWorkingDir();

        console.log("Uploading files from 'out' folder...");
        const outDir = path.join(__dirname, "../out");
        
        if (!fs.existsSync(outDir)) {
            throw new Error("'out' folder not found. Please run 'npm run build' first.");
        }

        await client.uploadFromDir(outDir);

        console.log("\n=========================================");
        console.log("  Deployment completed successfully!  ");
        console.log("  URL: https://warareki.com           ");
        console.log("=========================================");
    } catch (err) {
        console.error("\n[!] Deployment failed:");
        console.error(err.message);
    } finally {
        client.close();
        process.stdin.destroy();
    }
}

deploy();
