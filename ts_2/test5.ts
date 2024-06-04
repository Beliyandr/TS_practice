const serverNewConfig: BasicConfig = {
  protocol: "https",
  port: 3001,
};

const backupConfig: BasicConfig = {
  protocol: "http",
  port: 3000,
};

interface BasicConfig {
  protocol: string;
  port: number;
}

const starNewtServer = (config: BasicConfig): "Server started" => {
  console.log(`Server started on ${config.protocol}://server:${config.port}`);

  return "Server started";
};

starNewtServer(serverNewConfig);
starNewtServer(backupConfig);
