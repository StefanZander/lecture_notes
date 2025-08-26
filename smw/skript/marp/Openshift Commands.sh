Openshift Commands 


helm install smw-prj04 bitnami/mediawiki --version "19.0.2" --namespace smw-prj04 -f values.yaml --set mediawikiHost="smw-prj04.apps.edu.ocp.users.h-da.cloud" --set ingress.hostname="smw-prj04.apps.edu.ocp.users.h-da.cloud"

echo "enableSemantics( 'smw-prj01.apps.edu.ocp.users.h-da.cloud' );" >> LocalSettings.php

======

Copy Files to and from a container

Example: pod/smw-lva03-mediawiki-79bf775df4-kx69p

# from container to host:
oc cp smw-lva03-mediawiki-79bf775df4-kx69p:/opt/bitnami/mediawiki/composer.local.json composer.local.json

# from host to container
oc cp composer.local.json smw-lva03-mediawiki-79bf775df4-kx69p:/opt/bitnami/mediawiki/composer.local.json

oc cp smw-lva03-mediawiki-79bf775df4-kx69p:/bitnami/mediawiki/LocalSettings.php LocalSettings.php

oc cp LocalSettings.php smw-lva03-mediawiki-79bf775df4-kx69p:/bitnami/mediawiki/LocalSettings.php 


# Executing commands in a pod
oc exec smw-lva03-mediawiki-79bf775df4-kx69p ls
