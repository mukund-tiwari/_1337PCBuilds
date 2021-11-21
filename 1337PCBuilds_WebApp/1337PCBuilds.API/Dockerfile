FROM mcr.microsoft.com/dotnet/aspnet:5.0
COPY bin/Release/net5.0/publish/ 1337PCBuilds.API/
WORKDIR /1337PCBuilds.API
ENV DOTNET_EnableDiagnostics=0
ENTRYPOINT ["dotnet", "1337PCBuilds.API.dll"]