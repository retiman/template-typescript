# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.234.0/containers/typescript-node/.devcontainer/base.Dockerfile
ARG VARIANT="18-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

# Add a custom prompt to the image because the default one is a bit too noisy.
WORKDIR /home/node
ADD prompt.sh prompt.sh
RUN cat prompt.sh >> .bashrc && rm prompt.sh
