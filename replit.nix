{ pkgs }: {
  deps = [
    pkgs.emscripten
    pkgs.nodejs-16_x
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
}