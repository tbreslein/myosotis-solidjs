{
  description = "Collaborative ToDo App for Android and Web";
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        NPM_CONFIG_PREFIX = toString ./npm_config_prefix;
      in
      {
        devShell = pkgs.mkShell {
          nativeBuildInputs = with pkgs; [
            nodejs
            nodePackages.npm
            nodePackages.cspell
            nodePackages.typescript-language-server
            nodePackages.vscode-langservers-extracted
          ];
          buildInputs = [ ];
          inherit NPM_CONFIG_PREFIX;
          shellHook = ''
            export PATH="${NPM_CONFIG_PREFIX}/bin:$PATH"
          '';
        };
      });
}
