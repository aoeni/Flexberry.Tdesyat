docker build --no-cache -f SQL\Dockerfile.PostgreSql -t tdesyat/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t tdesyat/app ../..
